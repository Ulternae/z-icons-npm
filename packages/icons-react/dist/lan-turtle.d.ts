import React from 'react';

export interface LanTurtleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurtle: React.FC<LanTurtleProps>;
export default LanTurtle;
