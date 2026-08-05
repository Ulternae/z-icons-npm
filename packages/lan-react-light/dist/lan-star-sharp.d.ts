import React from 'react';

export interface LanStarSharpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarSharp(props: LanStarSharpProps): React.ReactElement;
export default LanStarSharp;
