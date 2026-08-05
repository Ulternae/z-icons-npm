import React from 'react';

export interface NeoPaperclipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPaperclipSolid(props: NeoPaperclipSolidProps): React.ReactElement;
export default NeoPaperclipSolid;
