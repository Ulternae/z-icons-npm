import React from 'react';

export interface LanHeartSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartSquareThin(props: LanHeartSquareThinProps): React.ReactElement;
export default LanHeartSquareThin;
