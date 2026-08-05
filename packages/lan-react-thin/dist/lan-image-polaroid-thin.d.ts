import React from 'react';

export interface LanImagePolaroidThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagePolaroidThin(props: LanImagePolaroidThinProps): React.ReactElement;
export default LanImagePolaroidThin;
