import React from 'react';

export interface LanHexagonExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonExclamation(props: LanHexagonExclamationProps): React.ReactElement;
export default LanHexagonExclamation;
