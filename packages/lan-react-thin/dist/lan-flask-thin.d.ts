import React from 'react';

export interface LanFlaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlaskThin(props: LanFlaskThinProps): React.ReactElement;
export default LanFlaskThin;
