import React from 'react';

export interface LanSquareVirusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareVirus(props: LanSquareVirusProps): React.ReactElement;
export default LanSquareVirus;
