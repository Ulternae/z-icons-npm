import React from 'react';

export interface LanTentsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTents(props: LanTentsProps): React.ReactElement;
export default LanTents;
