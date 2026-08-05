import React from 'react';

export interface LanShishKebabThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShishKebabThin(props: LanShishKebabThinProps): React.ReactElement;
export default LanShishKebabThin;
