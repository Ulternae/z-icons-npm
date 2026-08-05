import React from 'react';

export interface LanShieldExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldExclamation(props: LanShieldExclamationProps): React.ReactElement;
export default LanShieldExclamation;
