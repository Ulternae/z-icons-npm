import React from 'react';

export interface MinaPaperclipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPaperclipSolid(props: MinaPaperclipSolidProps): React.ReactElement;
export default MinaPaperclipSolid;
