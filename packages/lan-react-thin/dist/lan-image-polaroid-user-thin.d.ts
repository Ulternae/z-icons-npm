import React from 'react';

export interface LanImagePolaroidUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagePolaroidUserThin(props: LanImagePolaroidUserThinProps): React.ReactElement;
export default LanImagePolaroidUserThin;
