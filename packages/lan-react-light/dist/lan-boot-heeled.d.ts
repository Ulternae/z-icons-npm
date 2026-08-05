import React from 'react';

export interface LanBootHeeledProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBootHeeled(props: LanBootHeeledProps): React.ReactElement;
export default LanBootHeeled;
