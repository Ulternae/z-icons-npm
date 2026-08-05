import React from 'react';

export interface LanKiteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKiteThin(props: LanKiteThinProps): React.ReactElement;
export default LanKiteThin;
