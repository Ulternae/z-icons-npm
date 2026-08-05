import React from 'react';

export interface MinaLocationSelectedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationSelected(props: MinaLocationSelectedProps): React.ReactElement;
export default MinaLocationSelected;
