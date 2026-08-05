import React from 'react';

export interface LanLibraThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLibraThin(props: LanLibraThinProps): React.ReactElement;
export default LanLibraThin;
