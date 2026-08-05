import React from 'react';

export interface NeoNewspaperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoNewspaperSolid(props: NeoNewspaperSolidProps): React.ReactElement;
export default NeoNewspaperSolid;
