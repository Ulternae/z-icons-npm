import React from 'react';

export interface LanExclamationThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExclamationThin(props: LanExclamationThinProps): React.ReactElement;
export default LanExclamationThin;
