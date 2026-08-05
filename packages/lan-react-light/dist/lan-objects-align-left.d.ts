import React from 'react';

export interface LanObjectsAlignLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectsAlignLeft(props: LanObjectsAlignLeftProps): React.ReactElement;
export default LanObjectsAlignLeft;
