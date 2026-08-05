import React from 'react';

export interface LanOptionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOption(props: LanOptionProps): React.ReactElement;
export default LanOption;
