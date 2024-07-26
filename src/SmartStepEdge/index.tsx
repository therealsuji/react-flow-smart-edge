import { useNodes, StepEdge } from '@xyflow/react'
import React from 'react'
import { SmartEdge } from '../SmartEdge'
import {
	svgDrawStraightLinePath,
	pathfindingJumpPointNoDiagonal
} from '../functions'
import type { SmartEdgeOptions } from '../SmartEdge'
import type { EdgeProps } from '@xyflow/react'

const StepConfiguration: SmartEdgeOptions = {
	drawEdge: svgDrawStraightLinePath,
	generatePath: pathfindingJumpPointNoDiagonal,
	fallback: StepEdge
}

export function SmartStepEdge(props: EdgeProps) {
	const nodes = useNodes()

	return <SmartEdge {...props} options={StepConfiguration} nodes={nodes} />
}
