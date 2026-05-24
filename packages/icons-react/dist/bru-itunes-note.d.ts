import React from 'react';

export interface BruItunesNoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruItunesNote: React.FC<BruItunesNoteProps>;
export default BruItunesNote;
