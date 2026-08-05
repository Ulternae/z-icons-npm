import React from 'react';

export interface MinaCampfireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCampfire(props: MinaCampfireProps): React.ReactElement;
export default MinaCampfire;
