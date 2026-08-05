import React from 'react';

export interface MinaMobileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMobile(props: MinaMobileProps): React.ReactElement;
export default MinaMobile;
