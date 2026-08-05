import React from 'react';

export interface LanBootHeeledThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBootHeeledThin(props: LanBootHeeledThinProps): React.ReactElement;
export default LanBootHeeledThin;
