import React from 'react';

export interface LanCropAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCropAlt(props: LanCropAltProps): React.ReactElement;
export default LanCropAlt;
