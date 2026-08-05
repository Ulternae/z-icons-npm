import React from 'react';

export interface MinaLocationUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationUser(props: MinaLocationUserProps): React.ReactElement;
export default MinaLocationUser;
