import React from 'react';

export interface LanTurtleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurtle(props: LanTurtleProps): React.ReactElement;
export default LanTurtle;
