import React from 'react';

export interface LanFaceIciclesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceIcicles(props: LanFaceIciclesProps): React.ReactElement;
export default LanFaceIcicles;
