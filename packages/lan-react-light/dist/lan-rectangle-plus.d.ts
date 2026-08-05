import React from 'react';

export interface LanRectanglePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglePlus(props: LanRectanglePlusProps): React.ReactElement;
export default LanRectanglePlus;
