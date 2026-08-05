import React from 'react';

export interface NeoNewspaperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoNewspaper(props: NeoNewspaperProps): React.ReactElement;
export default NeoNewspaper;
