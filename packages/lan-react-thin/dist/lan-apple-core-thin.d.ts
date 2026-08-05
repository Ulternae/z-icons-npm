import React from 'react';

export interface LanAppleCoreThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAppleCoreThin(props: LanAppleCoreThinProps): React.ReactElement;
export default LanAppleCoreThin;
