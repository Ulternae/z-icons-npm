import React from 'react';

export interface LanLycheeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLycheeThin(props: LanLycheeThinProps): React.ReactElement;
export default LanLycheeThin;
