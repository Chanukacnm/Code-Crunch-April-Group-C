import React, { useState, useEffect } from "react";
import {
  Typography,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  IconButton,
  Collapse,
  TableBody,
  Box,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";
import supabase from "../../supabase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface QualityChecklistItem {
  id: number;
  Index: string;
  Item: string;
  Owner: string;
  Status: string | null;
  Comments: string | null;
  Item_group: string;
}

const QualityAuditChecklist = () => {
  const [data, setData] = useState<QualityChecklistItem[]>([]);
  const [groupedData, setGroupedData] = useState<{
    [key: string]: QualityChecklistItem[];
  }>({});
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: myData, error } = await supabase
          .from("quality_checklist")
          .select("*");

        if (error) throw error;

        const sortedData = myData.sort((a, b) => {
          const indexA = parseInt(a.Index);
          const indexB = parseInt(b.Index);
          return indexA - indexB;
        });

        setData(sortedData);
        groupDataByItemGroup(sortedData);
      } catch (error) {
        console.error("Error fetching data:", (error as Error).message);
      }
    };

    fetchData();
  }, []);

  const groupDataByItemGroup = (data: QualityChecklistItem[]) => {
    const grouped: { [key: string]: QualityChecklistItem[] } = {};
    data.forEach((item) => {
      if (!grouped[item.Item_group]) {
        grouped[item.Item_group] = [];
      }
      grouped[item.Item_group].push(item);
    });
    setGroupedData(grouped);
  };

  const toggleGroup = (groupKey: string) => {
    setExpandedGroups((prevExpanded) =>
      prevExpanded.includes(groupKey)
        ? prevExpanded.filter((key) => key !== groupKey)
        : [...prevExpanded, groupKey]
    );
  };

  return (
    <BaseCard title="Quality Audit Checklist">
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "#0386d8", color: "#ffffff" }}>
                <Typography variant="h6">Item Group</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          {Object.keys(groupedData).map((groupKey) => (
            <React.Fragment key={groupKey}>
              <TableRow hover onClick={() => toggleGroup(groupKey)}>
                <TableCell>
                  <Box display="flex">
                    <IconButton size="small">
                      {expandedGroups.includes(groupKey) ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      {groupKey}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
              <Collapse
                in={expandedGroups.includes(groupKey)}
                timeout="auto"
                unmountOnExit
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ backgroundColor: "#03c9d7", color: "#ffffff" }}
                    >
                      Index
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "#03c9d7", color: "#ffffff" }}
                    >
                      Item
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "#03c9d7", color: "#ffffff" }}
                    >
                      Owner
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "#03c9d7", color: "#ffffff" }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "#03c9d7", color: "#ffffff" }}
                    >
                      Comments
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {groupedData[groupKey].map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.Index}</TableCell>
                      <TableCell>{item.Item}</TableCell>
                      <TableCell>{item.Owner}</TableCell>
                      <TableCell>{item.Status}</TableCell>
                      <TableCell>{item.Comments}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Collapse>
            </React.Fragment>
          ))}
        </Table>
      </TableContainer>
    </BaseCard>
  );
};

export default QualityAuditChecklist;
