import React from 'react';

export interface LanObjectsAlignTopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectsAlignTop(props: LanObjectsAlignTopProps): React.ReactElement;
export default LanObjectsAlignTop;
