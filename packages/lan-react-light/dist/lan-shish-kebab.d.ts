import React from 'react';

export interface LanShishKebabProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShishKebab(props: LanShishKebabProps): React.ReactElement;
export default LanShishKebab;
