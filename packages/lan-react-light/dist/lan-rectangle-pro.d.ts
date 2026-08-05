import React from 'react';

export interface LanRectangleProProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglePro(props: LanRectangleProProps): React.ReactElement;
export default LanRectanglePro;
