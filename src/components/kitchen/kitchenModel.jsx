import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function KitchenModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/cartoon_kitchen_interior.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.151}
        >
          <group
            name="Cartoon_Kitchen_Interiorfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Curtain#2"
                  position={[65.697, -44.227, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="Curtain#2_Curtain_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Curtain#2_Curtain_0"].geometry}
                    material={materials.Curtain}
                  />
                  <group name="Curtain#21">
                    <mesh
                      name="Curtain#21_Curtain#11_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Curtain#21_Curtain#11_0"].geometry}
                      material={materials["Curtain1.1"]}
                    />
                  </group>
                </group>
                <group
                  name="Floor"
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={207.463}
                >
                  <mesh
                    name="Floor_Floor_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Floor_Floor_0.geometry}
                    material={materials.Floor}
                  />
                </group>
                <group
                  name="Roof"
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="Roof_Roof_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Roof_Roof_0.geometry}
                    material={materials.Roof}
                  />
                </group>
                <group
                  name="Tile"
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={207.463}
                >
                  <mesh
                    name="Tile_Tile_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Tile_Tile_0.geometry}
                    material={materials.Tile}
                  />
                </group>
                <group
                  name="Wall#1"
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={207.463}
                >
                  <mesh
                    name="Wall#1_Walls_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Wall#1_Walls_0"].geometry}
                    material={materials.Walls}
                  />
                </group>
                <group
                  name="Window#2"
                  position={[65.697, -38.983, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Window#2_Window_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Window#2_Window_0"].geometry}
                    material={materials.Window}
                  />
                  <group name="Window#2Glass">
                    <mesh
                      name="Window#2Glass_Glass001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Window#2Glass_Glass001_0"].geometry}
                      material={materials["Glass.001"]}
                    />
                  </group>
                  <group name="Window#2Wood">
                    <mesh
                      name="Window#2Wood_Window_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Window#2Wood_Window_0"].geometry}
                      material={materials.Window}
                    />
                  </group>
                </group>
                <group
                  name="Window#1"
                  position={[0, -39.034, -47.59]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="Window#1_Window_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Window#1_Window_0"].geometry}
                    material={materials.Window}
                  />
                  <group name="Window#1Glass">
                    <mesh
                      name="Window#1Glass_Glass001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Window#1Glass_Glass001_0"].geometry}
                      material={materials["Glass.001"]}
                    />
                  </group>
                  <group name="Window#1Wood">
                    <mesh
                      name="Window#1Wood_Window_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Window#1Wood_Window_0"].geometry}
                      material={materials.Window}
                    />
                  </group>
                </group>
                <group
                  name="Curtain#1"
                  position={[-50.487, -44.227, 284.226]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="Curtain#1_Curtain_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Curtain#1_Curtain_0"].geometry}
                    material={materials.Curtain}
                  />
                  <group name="Curtain#11">
                    <mesh
                      name="Curtain#11_Curtain#11_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Curtain#11_Curtain#11_0"].geometry}
                      material={materials["Curtain1.1"]}
                    />
                  </group>
                </group>
                <group
                  name="ToolHolder"
                  position={[391.894, 163.279, -273.926]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="ToolHolder_ToolHolder_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.ToolHolder_ToolHolder_0.geometry}
                    material={materials.ToolHolder}
                  />
                  <group name="Tool#3" position={[-0.147, -0.027, -0.006]}>
                    <mesh
                      name="Tool#3_Tool#3001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Tool#3_Tool#3001_0"].geometry}
                      material={materials["Tool3.001"]}
                    />
                  </group>
                  <group name="Tool#2" position={[0.049, -0.027, -0.006]}>
                    <mesh
                      name="Tool#2_Tool#2001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Tool#2_Tool#2001_0"].geometry}
                      material={materials["Tool2.001"]}
                    />
                  </group>
                  <group name="Tool#1" position={[0.147, -0.027, -0.006]}>
                    <mesh
                      name="Tool#1_Tool#1001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Tool#1_Tool#1001_0"].geometry}
                      material={materials["Tool1.001"]}
                    />
                  </group>
                </group>
                <group
                  name="Toaster"
                  position={[-21.823, 96.196, -406.478]}
                  rotation={[-Math.PI / 2, 0, -0.293]}
                  scale={100}
                >
                  <mesh
                    name="Toaster_Toaster_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Toaster_Toaster_0.geometry}
                    material={materials.Toaster}
                  />
                  <group
                    name="Socket_ToasterHandle"
                    position={[-0.075, -0.1, 0.167]}
                  >
                    <group name="ToasterHandle" position={[0.075, 0.1, -0.167]}>
                      <mesh
                        name="ToasterHandle_Toaster_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.ToasterHandle_Toaster_0.geometry}
                        material={materials.Toaster}
                      />
                    </group>
                  </group>
                  <group
                    name="Socket_ToasterBreadRear"
                    position={[-0.009, 0.02, 0.221]}
                  >
                    <group
                      name="ToasterBreadRear"
                      position={[0, -0.02, -0.221]}
                    >
                      <mesh
                        name="ToasterBreadRear_Toaster_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.ToasterBreadRear_Toaster_0.geometry}
                        material={materials.Toaster}
                      />
                    </group>
                  </group>
                  <group
                    name="Socket_ToasterBreadFront"
                    position={[0.003, -0.02, 0.221]}
                  >
                    <group
                      name="ToasterBreadFront"
                      position={[0, 0.02, -0.221]}
                    >
                      <mesh
                        name="ToasterBreadFront_Toaster_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.ToasterBreadFront_Toaster_0.geometry}
                        material={materials.Toaster}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Teapot"
                  position={[62.323, 96.196, -411.384]}
                  rotation={[-Math.PI / 2, 0, 1.519]}
                  scale={100}
                >
                  <mesh
                    name="Teapot_Teapot_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Teapot_Teapot_0.geometry}
                    material={materials.Teapot}
                  />
                  <group name="Socket_Teapot" position={[0, 0, 0.244]}>
                    <group name="TeapotCover" position={[0, 0, -0.244]}>
                      <mesh
                        name="TeapotCover_Teapot_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.TeapotCover_Teapot_0.geometry}
                        material={materials.Teapot}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Table"
                  position={[-11.024, 0, -63.016]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Table_Table_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Table_Table_0.geometry}
                    material={materials.Table}
                  />
                </group>
                <group
                  name="Sink"
                  position={[159.71, 0, -439.291]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Sink_Sink_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sink_Sink_0.geometry}
                    material={materials.Sink}
                  />
                </group>
                <group
                  name="Pot#2"
                  position={[361.12, 96.196, -232.521]}
                  rotation={[-Math.PI / 2, 0, -1.856]}
                  scale={100}
                >
                  <mesh
                    name="Pot#2_Pot#2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Pot#2_Pot#2_0"].geometry}
                    material={materials.Pot2}
                  />
                  <group name="Socket_Pot#2" position={[0, 0, 0.342]}>
                    <group name="Pot#2Cover" position={[0, 0, -0.342]}>
                      <mesh
                        name="Pot#2Cover_Pot#2_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Pot#2Cover_Pot#2_0"].geometry}
                        material={materials.Pot2}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Pot"
                  position={[362.202, 97.387, -147.021]}
                  rotation={[-Math.PI / 2, 0, 1.585]}
                  scale={100}
                >
                  <mesh
                    name="Pot_Pot_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Pot_Pot_0.geometry}
                    material={materials.material}
                  />
                  <group name="Socket_Pot" position={[0, 0, 0.258]}>
                    <group name="PotCover" position={[0, 0, -0.258]}>
                      <mesh
                        name="PotCover_Pot_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.PotCover_Pot_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Plate#1"
                  position={[76.441, 85.145, -60.505]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Plate#1_Plate_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Plate#1_Plate_0"].geometry}
                    material={materials.Plate}
                  />
                </group>
                <group
                  name="Pan"
                  position={[326.266, 97.387, -179.796]}
                  rotation={[-Math.PI / 2, 0, 0.448]}
                  scale={100}
                >
                  <mesh
                    name="Pan_Pan_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Pan_Pan_0.geometry}
                    material={materials.material_19}
                  />
                </group>
                <group
                  name="Oven"
                  position={[391.096, 0, -163.69]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="Oven_Oven_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Oven_Oven_0.geometry}
                    material={materials.Oven}
                  />
                  <group name="Socket_OvenPlate" position={[0, -0.526, 0.418]}>
                    <group name="OvenPlate" position={[0, 0.526, -0.418]}>
                      <mesh
                        name="OvenPlate_Oven_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.OvenPlate_Oven_0.geometry}
                        material={materials.Oven}
                      />
                    </group>
                  </group>
                  <group name="Socket_OvenDoor" position={[0, -0.891, 0.1]}>
                    <group name="OvenDoor" position={[0, 0.891, -0.1]}>
                      <mesh
                        name="OvenDoor_Oven_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.OvenDoor_Oven_0.geometry}
                        material={materials.Oven}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Microwave"
                  position={[357.44, 96.196, -409.167]}
                  rotation={[-Math.PI / 2, 0, -0.651]}
                  scale={100}
                >
                  <mesh
                    name="Microwave_Microwave_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Microwave_Microwave_0.geometry}
                    material={materials.Microwave}
                  />
                  <group
                    name="Socket_Microwave"
                    position={[-0.378, -0.367, 0.214]}
                  >
                    <group
                      name="Socket_MicrowaveDoor"
                      position={[0.378, 0.367, -0.214]}
                    >
                      <mesh
                        name="Socket_MicrowaveDoor_Microwave_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.Socket_MicrowaveDoor_Microwave_0.geometry
                        }
                        material={materials.Microwave}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="HorizontalUpper"
                  position={[248.613, 175, -442.386]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="HorizontalUpper_HorizontalUpper_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.HorizontalUpper_HorizontalUpper_0.geometry}
                    material={materials["Horizontal.Upper"]}
                  />
                  <group
                    name="Socket_HorizontalUpperU"
                    position={[0, -0.886, 0.822]}
                  >
                    <group
                      name="HorizontalUpperU"
                      position={[0, 0.886, -0.822]}
                    >
                      <mesh
                        name="HorizontalUpperU_HorizontalUpper_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.HorizontalUpperU_HorizontalUpper_0.geometry
                        }
                        material={materials["Horizontal.Upper"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Socket_HorizontalUpperL"
                    position={[0, -0.886, 0.436]}
                  >
                    <group
                      name="HorizontalUpperL"
                      position={[0, 0.886, -0.436]}
                    >
                      <mesh
                        name="HorizontalUpperL_HorizontalUpper_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.HorizontalUpperL_HorizontalUpper_0.geometry
                        }
                        material={materials["Horizontal.Upper"]}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Fridge"
                  position={[314.375, 0, 196.452]}
                  rotation={[-Math.PI / 2, 0, -2.186]}
                  scale={100}
                >
                  <mesh
                    name="Fridge_Fridge_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fridge_Fridge_0.geometry}
                    material={materials.Fridge}
                  />
                  <group
                    name="Socket_FridgeDoorU"
                    position={[0.418, -0.749, 1.267]}
                  >
                    <group
                      name="FridgeDoorU"
                      position={[-0.418, 0.749, -1.267]}
                    >
                      <mesh
                        name="FridgeDoorU_Fridge_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.FridgeDoorU_Fridge_0.geometry}
                        material={materials.Fridge}
                      />
                    </group>
                  </group>
                  <group
                    name="Socket_FridgeDoorL"
                    position={[0.418, -0.749, 0.485]}
                  >
                    <group
                      name="FridgeDoorL"
                      position={[-0.418, 0.749, -0.485]}
                    >
                      <mesh
                        name="FridgeDoorL_Fridge_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.FridgeDoorL_Fridge_0.geometry}
                        material={materials.Fridge}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Corner"
                  position={[391.096, 0, -439.291]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Corner_Corner_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Corner_Corner_0.geometry}
                    material={materials.Corner}
                  />
                </group>
                <group
                  name="Commode"
                  position={[-18.454, 0, -439.291]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Commode_Commode_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Commode_Commode_0.geometry}
                    material={materials.Commode}
                  />
                  <group name="Socket_CommodeU" position={[0, -0.931, 0.834]}>
                    <group name="CommodeDrawerU" position={[0, 0.931, -0.834]}>
                      <mesh
                        name="CommodeDrawerU_Commode_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CommodeDrawerU_Commode_0.geometry}
                        material={materials.Commode}
                      />
                    </group>
                  </group>
                  <group name="Socket_CommodeM" position={[0, -0.931, 0.576]}>
                    <group name="CommodeDrawerM" position={[0, 0.931, -0.576]}>
                      <mesh
                        name="CommodeDrawerM_Commode_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CommodeDrawerM_Commode_0.geometry}
                        material={materials.Commode}
                      />
                    </group>
                  </group>
                  <group name="Socket_CommodeL" position={[0, -0.931, 0.316]}>
                    <group name="CommodeDrawerL" position={[0, 0.931, -0.316]}>
                      <mesh
                        name="CommodeDrawerL_Commode_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CommodeDrawerL_Commode_0.geometry}
                        material={materials.Commode}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="CoffeeMaker"
                  position={[363.226, 96.196, -315.408]}
                  rotation={[-Math.PI / 2, 0, -3.054]}
                  scale={100}
                >
                  <mesh
                    name="CoffeeMaker_CoffeeMaker_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.CoffeeMaker_CoffeeMaker_0.geometry}
                    material={materials.CoffeeMaker}
                  />
                </group>
                <group
                  name="Chair#1"
                  position={[-54.944, 0, -128.448]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Chair#1_Chair_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Chair#1_Chair_0"].geometry}
                    material={materials.Chair}
                  />
                </group>
                <group
                  name="2DoorUpper"
                  position={[70.576, 175, -442.386]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="2DoorUpper_2DoorUpper_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["2DoorUpper_2DoorUpper_0"].geometry}
                    material={materials["2Door.Upper"]}
                  />
                  <group
                    name="Socket_2DoorUpperR"
                    position={[-0.605, -0.886, 0.443]}
                  >
                    <group
                      name="2DoorUpperDoorR"
                      position={[0.605, 0.886, -0.443]}
                    >
                      <mesh
                        name="2DoorUpperDoorR_2DoorUpper_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes["2DoorUpperDoorR_2DoorUpper_0"].geometry
                        }
                        material={materials["2Door.Upper"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Socket_2DoorUpperL"
                    position={[0.606, -0.886, 0.443]}
                  >
                    <group
                      name="2DoorUpperDoorL"
                      position={[-0.606, 0.886, -0.443]}
                    >
                      <mesh
                        name="2DoorUpperDoorL_2DoorUpper_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes["2DoorUpperDoorL_2DoorUpper_0"].geometry
                        }
                        material={materials["2Door.Upper"]}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="2Door"
                  position={[391.096, 0, -274.759]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="2Door_2Door_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["2Door_2Door_0"].geometry}
                    material={materials["2Door"]}
                  />
                  <group
                    name="Socket_2DoorR"
                    position={[-0.605, -0.904, 0.458]}
                  >
                    <group
                      name="Socket_2DoorDoorR"
                      position={[0.605, 0.904, -0.458]}
                    >
                      <mesh
                        name="Socket_2DoorDoorR_2Door_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Socket_2DoorDoorR_2Door_0.geometry}
                        material={materials["2Door"]}
                      />
                    </group>
                  </group>
                  <group name="Socket_2DoorL" position={[0.606, -0.904, 0.458]}>
                    <group
                      name="Socket_2DoorDoorL"
                      position={[-0.606, 0.904, -0.458]}
                    >
                      <mesh
                        name="Socket_2DoorDoorL_2Door_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Socket_2DoorDoorL_2Door_0.geometry}
                        material={materials["2Door"]}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="1DoorUpperL"
                  position={[-29.531, 175, -442.386]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="1DoorUpperL_1DoorUpper_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["1DoorUpperL_1DoorUpper_0"].geometry}
                    material={materials["1Door.Upper"]}
                  />
                  <group
                    name="Socket_1DoorUpperL"
                    position={[-0.275, -0.887, 0.443]}
                  >
                    <group
                      name="1DoorUpperLDoor"
                      position={[0.275, 0.887, -0.443]}
                    >
                      <mesh
                        name="1DoorUpperLDoor_1DoorUpper_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes["1DoorUpperLDoor_1DoorUpper_0"].geometry
                        }
                        material={materials["1Door.Upper"]}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="1DoorL"
                  position={[59.673, 0, -439.291]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="1DoorL_1Door_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["1DoorL_1Door_0"].geometry}
                    material={materials["1Door"]}
                  />
                  <group
                    name="Socket_1DoorL"
                    position={[-0.275, -0.904, 0.456]}
                  >
                    <group name="1DoorLDoor" position={[0.275, 0.904, -0.456]}>
                      <mesh
                        name="1DoorLDoor_1Door_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["1DoorLDoor_1Door_0"].geometry}
                        material={materials["1Door"]}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Chair#2"
                  position={[38.037, 0, -126.831]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Chair#2_Chair_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Chair#2_Chair_0"].geometry}
                    material={materials.Chair}
                  />
                </group>
                <group
                  name="Chair#3"
                  position={[25.228, 0, -3.018]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="Chair#3_Chair_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Chair#3_Chair_0"].geometry}
                    material={materials.Chair}
                  />
                </group>
                <group
                  name="Chair#4"
                  position={[-54.944, 0, 0.204]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="Chair#4_Chair_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Chair#4_Chair_0"].geometry}
                    material={materials.Chair}
                  />
                </group>
                <group
                  name="Chair#5"
                  position={[95.254, 0, -59.893]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="Chair#5_Chair_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Chair#5_Chair_0"].geometry}
                    material={materials.Chair}
                  />
                </group>
                <group
                  name="Chair#6"
                  position={[-114.926, 0, -61.226]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="Chair#6_Chair_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Chair#6_Chair_0"].geometry}
                    material={materials.Chair}
                  />
                </group>
                <group
                  name="1Door"
                  position={[259.684, 0, -439.291]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="1Door_1Door_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["1Door_1Door_0"].geometry}
                    material={materials["1Door"]}
                  />
                  <group
                    name="Socket_1Door"
                    position={[0.275, -0.904, 0.456]}
                    rotation={[-Math.PI, 0, 0]}
                  >
                    <group name="1DoorDoor" position={[-0.275, -0.904, 0.456]}>
                      <mesh
                        name="1DoorDoor_1Door_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["1DoorDoor_1Door_0"].geometry}
                        material={materials["1Door"]}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="1DoorUpper"
                  position={[170.598, 175, -442.386]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="1DoorUpper_1DoorUpper_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["1DoorUpper_1DoorUpper_0"].geometry}
                    material={materials["1Door.Upper"]}
                  />
                  <group
                    name="Socket_1DoorUpper"
                    position={[0.275, -0.887, 0.443]}
                    rotation={[-Math.PI, 0, 0]}
                  >
                    <group
                      name="1DoorUpperDoor"
                      position={[-0.275, -0.887, 0.443]}
                    >
                      <mesh
                        name="1DoorUpperDoor_1DoorUpper_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["1DoorUpperDoor_1DoorUpper_0"].geometry}
                        material={materials["1Door.Upper"]}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Plate#2"
                  position={[28.684, 85.145, -99.626]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Plate#2_Plate_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Plate#2_Plate_0"].geometry}
                    material={materials.Plate}
                  />
                </group>
                <group
                  name="Plate#4"
                  position={[-45.447, 85.145, -101.729]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Plate#4_Plate_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Plate#4_Plate_0"].geometry}
                    material={materials.Plate}
                  />
                </group>
                <group
                  name="Plate#6"
                  position={[-53.275, 85.145, -25.503]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Plate#6_Plate_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Plate#6_Plate_0"].geometry}
                    material={materials.Plate}
                  />
                </group>
                <group
                  name="Plate#3"
                  position={[234.909, 96.196, -395.287]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Plate#3_Plate_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Plate#3_Plate_0"].geometry}
                    material={materials.Plate}
                  />
                  <group name="Plate#31" position={[0, 0, 0.012]}>
                    <mesh
                      name="Plate#31_Plate_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Plate#31_Plate_0"].geometry}
                      material={materials.Plate}
                    />
                  </group>
                  <group name="Plate#32" position={[0, 0, 0.025]}>
                    <mesh
                      name="Plate#32_Plate_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Plate#32_Plate_0"].geometry}
                      material={materials.Plate}
                    />
                  </group>
                  <group name="Plate#33" position={[0, 0, 0.037]}>
                    <mesh
                      name="Plate#33_Plate_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Plate#33_Plate_0"].geometry}
                      material={materials.Plate}
                    />
                  </group>
                </group>
                <group
                  name="Plate#5"
                  position={[32.136, 85.145, -23.226]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Plate#5_Plate_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Plate#5_Plate_0"].geometry}
                    material={materials.Plate}
                  />
                </group>
                <group
                  name="ExtractorHood"
                  position={[394.148, 196.25, -163.69]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name="ExtractorHood_ExtractorHood_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.ExtractorHood_ExtractorHood_0.geometry}
                    material={materials.ExtractorHood}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/cartoon_kitchen_interior.glb");
