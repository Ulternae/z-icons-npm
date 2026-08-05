import React from 'react';

export interface LanImagesUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagesUserThin(props: LanImagesUserThinProps): React.ReactElement;
export default LanImagesUserThin;
