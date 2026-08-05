import React from 'react';

export interface LanInputTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputText(props: LanInputTextProps): React.ReactElement;
export default LanInputText;
