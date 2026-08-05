import React from 'react';

export interface LanDumbbellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDumbbellRegular(props: LanDumbbellRegularProps): React.ReactElement;
export default LanDumbbellRegular;
