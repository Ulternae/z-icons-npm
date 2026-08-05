import React from 'react';

export interface MinaPaperclipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPaperclip(props: MinaPaperclipProps): React.ReactElement;
export default MinaPaperclip;
