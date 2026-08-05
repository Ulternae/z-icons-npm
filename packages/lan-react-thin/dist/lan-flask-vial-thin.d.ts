import React from 'react';

export interface LanFlaskVialThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlaskVialThin(props: LanFlaskVialThinProps): React.ReactElement;
export default LanFlaskVialThin;
