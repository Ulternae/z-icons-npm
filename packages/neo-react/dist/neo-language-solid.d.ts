import React from 'react';

export interface NeoLanguageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLanguageSolid(props: NeoLanguageSolidProps): React.ReactElement;
export default NeoLanguageSolid;
