import React from 'react';

export interface LanFaceSmileHaloProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileHalo(props: LanFaceSmileHaloProps): React.ReactElement;
export default LanFaceSmileHalo;
