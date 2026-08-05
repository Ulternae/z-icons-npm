import React from 'react';

export interface LanBarcodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeThin(props: LanBarcodeThinProps): React.ReactElement;
export default LanBarcodeThin;
