import React from 'react';

export interface LanManholeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanManholeThin(props: LanManholeThinProps): React.ReactElement;
export default LanManholeThin;
