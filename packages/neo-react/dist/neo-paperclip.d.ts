import React from 'react';

export interface NeoPaperclipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPaperclip(props: NeoPaperclipProps): React.ReactElement;
export default NeoPaperclip;
