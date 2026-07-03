import React from 'react';

export interface BruItunesNoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruItunesNote(props: BruItunesNoteProps): React.ReactElement;
export default BruItunesNote;
