import React from 'react';

export interface LanKeynoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeynoteThin(props: LanKeynoteThinProps): React.ReactElement;
export default LanKeynoteThin;
