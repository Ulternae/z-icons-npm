import React from 'react';

export interface LanMicrochipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrochipThin(props: LanMicrochipThinProps): React.ReactElement;
export default LanMicrochipThin;
