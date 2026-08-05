import React from 'react';

export interface MinaCopyrightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCopyright(props: MinaCopyrightProps): React.ReactElement;
export default MinaCopyright;
