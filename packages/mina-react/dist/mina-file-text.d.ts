import React from 'react';

export interface MinaFileTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFileText(props: MinaFileTextProps): React.ReactElement;
export default MinaFileText;
