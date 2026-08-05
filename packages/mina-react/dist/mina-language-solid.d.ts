import React from 'react';

export interface MinaLanguageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLanguageSolid(props: MinaLanguageSolidProps): React.ReactElement;
export default MinaLanguageSolid;
